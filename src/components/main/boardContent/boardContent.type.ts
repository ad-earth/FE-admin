interface NewOrders {
  newOrders: number;
}
interface ProductsCnt {
  productsCnt: number;
}
interface LastSales {
  lastSales: number;
}
type Boards = NewOrders & ProductsCnt & LastSales;

export interface BoardType {
  data: { data: Boards };
}
