import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    OneToMany,
    BeforeInsert,
} from 'typeorm';

import { BlogEntryEntity } from 'src/blog/models/blog-entry.entity';
import { UserRole } from './user.interface';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    username: string;

    @Column({unique: true})
    email: string;

    @Column({select: false})
    password: string;

    @Column({type: 'enum', enum: UserRole, default: UserRole.USER})
    role: UserRole;

    @Column({nullable: true})
    profileImage: string;

    @OneToMany(type => BlogEntryEntity, blogEntryEntity => blogEntryEntity.author)
    blogEntries: BlogEntryEntity[];

    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase();
    }
}