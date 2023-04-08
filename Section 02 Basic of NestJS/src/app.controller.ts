import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/asdf")
  getRootRoute() {
    return "Hello World!";
  }

  @Get("/bye")
  getByThere() {
    return "Bye there!";
  }
}
