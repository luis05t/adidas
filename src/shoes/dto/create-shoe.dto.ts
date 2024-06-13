import { ApiProperty } from "@nestjs/swagger";
import { isNumber } from "util";
export class CreateShoeDto {
    @ApiProperty()
    model: string;

    @ApiProperty()
    color: string;

    @ApiProperty()
    price: number;
    
}