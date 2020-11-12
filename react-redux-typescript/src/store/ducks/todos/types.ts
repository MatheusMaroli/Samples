
export enum TodosTypes {
    ADD = '@todos/ADD',
    REMOVE = '@todos/REMOVE'
} 

export interface Todos {
    id: number
    name: string
};

export interface TodosState {
  readonly data : Todos[]
}