interface ObjectConstructor {
  keys<T extends {}>(o: T): (keyof T & string)[];
}

declare var Object: ObjectConstructor;
