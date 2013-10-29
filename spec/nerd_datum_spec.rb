require_relative '../lib/nerd_datum'

describe NerdDatum do
  specify '#to_hash' do
    datum = NerdDatum.new('node')
    datum.stub(:id) { 'id' }
    datum.stub(:image) { 'image' }
    datum.stub(:name) { 'name' }

    expect(datum.to_hash).to eq(Hash[id: 'id',
        image: 'image',
        name: 'name'])
  end
end
