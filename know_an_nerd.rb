require 'sinatra'
require 'json'
require 'lib/nerd_data'

get '/' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/api/nerds' do
  NerdData.all.to_json
end
