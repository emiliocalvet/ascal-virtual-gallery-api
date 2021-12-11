import { Module } from '@nestjs/common';
import { SculptureController } from './sculpture/sculpture.controller';
import { SculptureService } from './sculpture/sculpture.service';

@Module({
  imports: [],
  controllers: [SculptureController],
  providers: [SculptureService],
})
export class AppModule {}
