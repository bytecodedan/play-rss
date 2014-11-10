package controllers

import models.FeedParser
import play.api.Play.current
import play.api.libs.json.Json
import play.api.libs.ws.WS
import play.api.mvc._

import scala.concurrent.ExecutionContext.Implicits.global


object Feeds extends Controller {

  def autoblog = Action.async {
    WS.url("https://www.autoblog.com/rss.xml").get().map { response =>
      Ok(Json.toJson(FeedParser.parse(response.body)))
    }
  }

  def autoblogByCategory(category: String) = Action.async {
    WS.url(s"https://www.autoblog.com/category/$category/rss.xml").get().map { response =>
      Ok(Json.toJson(FeedParser.parse(response.body)))
    }
  }

  def huffingtonPost = Action.async {
    WS.url("https://www.huffingtonpost.com/feeds/index.xml").get().map { response =>
      Ok(Json.toJson(FeedParser.parse(response.body)))
    }
  }

  def huffingtonPostByCategory(category: String) = Action.async {
    WS.url(s"https://www.huffingtonpost.com/feeds/verticals/$category/index.xml").get().map { response =>
      Ok(Json.toJson(FeedParser.parse(response.body)))
    }
  }

}
