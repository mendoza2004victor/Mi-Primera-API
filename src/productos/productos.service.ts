import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  private productos: Producto[] = [];
  private counter = 1;

  create(dto: CreateProductoDto) {
    const nuevo: Producto = {
      id: this.counter++,
      ...dto,
    };
    this.productos.push(nuevo);
    return nuevo;
  }

  findAll() {
    return this.productos;
  }

  findOne(id: number) {
    const producto = this.productos.find(p => p.id === id);
    if (!producto) throw new NotFoundException(`Producto ${id} no encontrado`);
    return producto;
  }

  update(id: number, dto: UpdateProductoDto) {
    const producto = this.findOne(id);
    Object.assign(producto, dto);
    return producto;
  }

  remove(id: number) {
    const index = this.productos.findIndex(p => p.id === id);
    if (index === -1) throw new NotFoundException(`Producto ${id} no encontrado`);
    const eliminado = this.productos[index];
    this.productos.splice(index, 1);
    return eliminado;
  }
}
