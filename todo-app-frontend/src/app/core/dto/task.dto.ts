export interface Task {
  id?: number;
  title: string;
  description: string;
  status: string;
  createdDate?: Date;
  dueDate: Date;
  userID?: number;
}
