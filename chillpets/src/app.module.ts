import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';
import { OrderService } from './order/order.service';
import { OrderController } from './order/order.controller';
import { OrderDetailsService } from './order-details/order-details.service';
import { OrderDetailsController } from './order-details/order-details.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthController, UserController, ProductController, CategoryController, OrderController, OrderDetailsController],
  providers: [AppService, AuthService, UserService, ProductService, CategoryService, OrderService, OrderDetailsService],
})
export class AppModule {}
