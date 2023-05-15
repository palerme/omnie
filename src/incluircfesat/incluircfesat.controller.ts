import { Controller, Get } from '@nestjs/common';
import { IncluircfesatService } from './incluircfesat.service';

@Controller('incluircfesat')
export class IncluircfesatController {
  constructor(private readonly incluircfesatService: IncluircfesatService) {}

  @Get()
  async incluirCFESat() {
    return this.incluircfesatService.buscaCupom();
  }
}
