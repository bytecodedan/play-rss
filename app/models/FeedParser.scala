package models

import play.api.libs.json.Json

import scala.xml._

sealed case class FeedItem(title: String, description: String, link: String,image: String)
object FeedItem {
  implicit val implicitWrites = Json.writes[FeedItem]
  implicit val implicitReads  = Json.reads[FeedItem]
}

case class ParsedFeed(title: String, items: Seq[FeedItem])
object ParsedFeed {
  implicit val implicitWrites = Json.writes[ParsedFeed]
  implicit val implicitReads  = Json.reads[ParsedFeed]
}

object FeedParser {
  /**
   * Parse an RSS feed item into a Scala Map
   */
  private def parseFeedItem(item: scala.xml.Node): FeedItem = {
    val title       = (item \ "title").text
    val description = (item \ "description").text
    val link        = (item \ "link").text
    val image        = (item \ "image").text
    FeedItem(title, description, link, image)
  }

  /**
   * Given an RSS feed body, parse it from XML to a Scala Feed
   */
  def parse(body: String): ParsedFeed = {
    val xml = XML.loadString(body)
    val channel = xml \ "channel"
    val title = (xml \ "title").text
    val result: Seq[FeedItem] = (channel \\ "item").map { item =>
      parseFeedItem(item)
    }
    ParsedFeed(title, result)
  }
}