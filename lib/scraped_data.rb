require 'nokogiri'
require 'open-uri'

class ScrapedData
  class Config
    def self.about_us_page
      open("http://www.bignerdranch.com/about_us/nerds") { |f| f.read }
    end

    def self.image_base_path
      "http://www.bignerdranch.com"
    end
  end

  class Name
    def self.for(node)
      node.at_css('p.t-bio-name').inner_html
    end
  end

  class Image
    def self.for(node)
      img = node.at_css('img').attribute_nodes.first.inner_text

      Config.image_base_path + img
    end
  end

  class NerdList
    def self.all
      nodes = Nokogiri::HTML(Config.about_us_page)

      nodes.css('a.l-about-nerd-bio')
    end
  end
end
