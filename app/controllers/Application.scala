package controllers

import play.api.mvc._

//import scala.concurrent.ExecutionContext.Implicits.global

object Application extends Controller {

  def test = Action {
    Ok("Your application is up and running.")
  }

  def index = Action {
    Ok(views.html.index())
  }

}