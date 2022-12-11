import { Module } from '@nestjs/common';
import { ImageService } from './internal/core/service/service';
import { GqlHandler } from './internal/handlers/gql';

@Module({
  imports: [],
  providers: [ImageService, GqlHandler],
  exports: [ImageService],
})
export class ImageModule {}
