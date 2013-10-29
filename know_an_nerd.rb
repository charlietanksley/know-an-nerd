require 'sinatra'
require 'json'
require 'lib/cache'

get '/' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/api/nerds' do
  KnowAnNerd::Cache.fetch
end
