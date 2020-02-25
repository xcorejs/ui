interface ObjectConstructor {
  keys<T extends {}>(o: T): (keyof T)[];
}

declare var Object: ObjectConstructor;
