import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  Generated,
} from "typeorm";

@Entity("post")
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userUuid!: string;

  @Column({ nullable: true })
  pageUuid!: string;

  @Column()
  @Generated()
  postUuid!: string;

  @CreateDateColumn({ nullable: true })
  createdAt!: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt!: Date;

  toJSON() {
    return { ...this, id: undefined };
  }
}
