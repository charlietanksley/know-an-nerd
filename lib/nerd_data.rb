require_relative 'scraped_data'
require_relative 'nerd_datum'

class NerdData
  def self.all
    new.all
  end

  attr_reader :nodes
  def initialize(nodes = nil)
    @nodes = nodes || ScrapedData::NerdList.all
  end

  def all
    nodes.each_with_object(results) do |node, hash|
      hash << NerdDatum.to_hash(node)
    end
  end

  private

  def results
    @results ||= Array.new
  end
end
