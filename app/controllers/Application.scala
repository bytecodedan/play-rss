package controllers

import models.FeedParser
import play.api._
import play.api.libs.json.Json
import play.api.libs.ws.WS
import play.api.Play.current
import play.api.mvc._

import scala.concurrent.ExecutionContext.Implicits.global

object Application extends Controller {

  def test = Action {
    Ok("Your application is up and running.")
  }

  def index = Action {
    Ok(views.html.index())
  }

}