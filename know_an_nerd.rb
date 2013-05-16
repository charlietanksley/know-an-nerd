require 'json'
require 'nokogiri'
require 'open-uri'
require 'sinatra'

get '/' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/api/nerds' do
  Nerds.json_nerds
end

module Nerds
  def json_nerds
    all.to_json
  end
  module_function :json_nerds

  def self.all
    array = []
    nerds = Nokogiri::HTML(about_us_page)

    nerds.css('.bio-container').each do |item|
      name = item.at_css('.nerd-name').inner_html
      image = item.at_css('.headshot').attribute_nodes.first.inner_text

      array << Hash[id: name_from_image(image),
        image: full_path(image),
        name: name]
    end

    array
  end

  def self.about_us_page
    open("http://www.bignerdranch.com/about_us/nerds") { |f| f.read }
  end

  def self.full_path(uri)
    "http://www.bignerdranch.com" + uri
  end

  def self.name_from_image(image)
    image_name = File.basename(image)
    image_name.gsub(/\..+/, '')
  end
end
