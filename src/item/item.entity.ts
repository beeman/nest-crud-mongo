import { Column, Entity, Index, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Item {
  @ObjectIdColumn() id: ObjectID;

  @Index({ unique: true })
  @Column('text') name: string;

  @Column('text') description: string;

  @Column('text') price: string;
}
