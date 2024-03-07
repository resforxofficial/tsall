// 모델 타입 정의
export interface Model {
  id: number;
}

// ORM 클래스 정의
export default class ORM<T extends Model> {
  private data: T[];

  constructor(initialData: T[]) {
    this.data = initialData;
  }

  // 데이터 가져오기
  getAll(): T[] {
    return this.data;
  }

  // ID로 데이터 가져오기
  getById(id: number): T | undefined {
    return this.data.find(item => item.id === id);
  }

  // 데이터 추가하기
  add(item: T): void {
    this.data.push(item);
  }

  // 데이터 업데이트하기
  update(id: number, newItem: T): void {
    const index = this.data.findIndex(item => item.id === id);
    if (index !== -1) {
      this.data[index] = newItem;
    }
  }

  // 데이터 삭제하기
  delete(id: number): void {
    this.data = this.data.filter(item => item.id !== id);
  }
}

