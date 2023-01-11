import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', name: 'user_name', comment: '用户名' })
    user_name: string;

    @Column({ type: 'varchar', name: 'user_pass', comment: '密码' })
    user_pass: string;

    @Column({ type: 'varchar', length: 11, name: 'mobile', comment: '手机号' })
    mobile: string;
}

