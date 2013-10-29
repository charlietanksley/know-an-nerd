require_relative 'scraped_data'

NerdDatum = Struct.new(:node) do
  def self.to_hash(node)
    new(node).to_hash
  end

  def id
    name.gsub(/\s+/, '-').downcase
  end

  def image
    ScrapedData::Image.for(node)
  end

  def name
    ScrapedData::Name.for(node)
  end

  def to_hash
    Hash[id: id,
      image: image,
      name: name]
  end
end
