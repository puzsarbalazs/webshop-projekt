/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
import {Product} from "./product.model";
import {CartService} from "../services/cart.service";
import {StoreService} from "../services/store.service";

export class Singleton {
  asd = 10;

  private static instance: Singleton;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() { }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public someBusinessLogic() {
    this.asd++;
  }
}