import { ApiProperty } from '@nestjs/swagger';

export class MakePaymentResponse {
  @ApiProperty({ example: '2d0d206e-000f-5000-a000-1a7bb3699c71' })
  id: string;

  @ApiProperty({ example: 'pending' })
  status: string;

  @ApiProperty({ example: '2023-12-14T14:09:50.647Z' })
  created_at: string;

  @ApiProperty({
    example: {
      value: '570',
      currency: 'RUB',
    },
  })
  amount: { value: string; currency: string };

  @ApiProperty({ example: 'заказ 1' })
  description: string;

  @ApiProperty({
    example: {
      type: 'redirect',
      confirmation_url:
        'https://yoomoney.ru/checkout/payments/v2/contract?orderId=2d0d206e-000f-5000-a000-1a7bb3699c71',
    },
  })
  confirmation: {
    type: string;
    confirmation_url: string;
  };

  @ApiProperty({
    example: {
      account_id: '292968',
      gateway_id: '2166463',
    },
  })
  recipient: {
    account_id: string;
    gateway_id: string;
  };

  @ApiProperty({ example: true })
  test: boolean;

  @ApiProperty({ example: false })
  paid: boolean;

  @ApiProperty({ example: false })
  refundable: boolean;

  @ApiProperty({ example: {} })
  metadata: object;
}
