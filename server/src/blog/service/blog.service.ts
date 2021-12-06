import { Injectable } from '@nestjs/common';
import { Observable, of, from } from 'rxjs';
import { BlogEntry } from '../models/blog-entry.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/models/user.interface';
import { switchMap, map, tap } from 'rxjs';
import { Pagination, IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { BlogEntryEntity } from '../models/blog-entry.entity';

const slugify = require('slugify');

@Injectable()
export class BlogService {



}
