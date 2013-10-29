require_relative '../lib/nerd_data'

describe NerdData do
  specify '#all' do
    nerd = Hash[id: 1]

    NerdDatum.stub(:to_hash) { nerd }
    data = NerdData.new([nerd])
    expect(data.all).to eq([nerd])
  end
end
