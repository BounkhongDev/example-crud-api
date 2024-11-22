import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createRoleDto: CreateRoleDto) {
    return await this.prisma.roles.create({ data: createRoleDto });
  }

  async findAll() {
    return await this.prisma.roles.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.roles.findUnique({ where: { id } });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    //check if the role existsk
    const role = await this.prisma.roles.findUnique({ where: { id } });
    if (!role) {
      throw new Error(`Role #${id} not found`);
    }
    //update the role
    return await this.prisma.roles.update({
      where: { id },
      data: updateRoleDto,
    });
  }

  async remove(id: number) {
    //check if the role exists
    const role = await this.prisma.roles.findUnique({ where: { id } });
    if (!role) {
      throw new Error(`Role #${id} not found`);
    }
    //delete the role
    return await this.prisma.roles.delete({ where: { id } });
  }
}
