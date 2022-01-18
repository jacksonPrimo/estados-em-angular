import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentSnapshot
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { Model } from '../models/model';

export abstract class FirebaseInterface<T extends Model> {
  ref: AngularFirestoreCollection<T>;

  constructor(
    protected type: { new (): T },
    protected firestore: AngularFirestore,
    public path: string
  ) {
    this.ref = this.firestore.collection<T>(this.path);
  }

  get(id: string): Observable<T> {
    let doc = this.ref.doc<T>(id);
    return doc.get().pipe(map((snapshot: any) => this.docToClass(snapshot)));
  }

  list(): Observable<T[]> {
    return this.ref.valueChanges();
  }

  createOrUpdate(item: T, uid?: string): Promise<any> {
    let id = !!uid ? uid : item.id;

    if (!item) return null as any

    let obj: any = null;

    if (item instanceof this.type) obj = item.toObject();
    else obj = item;
    if (!!id) {
      return this.ref.doc(id).set(obj);
    } else
      return this.ref.add(obj).then((res) => {
        obj.id = res.id; // Para salvar com o atributo id
        this.ref.doc(res.id).set(obj);
      });
  }

  docToClass(snapshotDoc: DocumentSnapshot<T>): T {
    let obj = { id: snapshotDoc.id, ...snapshotDoc.data() };
    let typed = plainToClass(this.type, obj);
    return typed;
  }
}
