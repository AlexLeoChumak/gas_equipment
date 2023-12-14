import { ApiProperty } from '@nestjs/swagger';

class ShoppingCartItem {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Addo culpo.' })
  name: string;

  @ApiProperty({ example: 2500 })
  price: number;

  @ApiProperty({ example: 7 })
  in_stock: number;

  @ApiProperty({ example: 'Azure' })
  parts_manufacturer: string;

  @ApiProperty({ example: 'Strategist' })
  boiler_manufacturer: string;

  @ApiProperty({ example: 2 })
  userId: number;

  @ApiProperty({ example: 2 })
  partId: number;

  @ApiProperty({ example: 3 })
  count: number;

  @ApiProperty({ example: 5 })
  total_price: number;

  @ApiProperty({
    example:
      'https://loremflickr.com/640/480/technics?lock=8194794798972928?random=1',
  })
  image: string;

  @ApiProperty({ example: '2023-12-14T07:09:38.869Z' })
  updatedAt: number;

  @ApiProperty({ example: '2023-12-14T07:09:38.869Z' })
  createdAt: string;
}

export class GetAllResponse extends ShoppingCartItem {}
export class AddToCartResponse extends ShoppingCartItem {}

export class UpdateCountResponse {
  @ApiProperty({ example: 1 })
  count: number;
}
export class UpdateCountRequest {
  @ApiProperty({ example: 1 })
  count: number;
}

export class TotalPriceResponse {
  @ApiProperty({ example: 1000 })
  total_price: number;
}
export class TotalPriceRequest {
  @ApiProperty({ example: 1000 })
  total_price: number;
}
