if ENV['DEVELOPMENT'] == 'true'
  require 'dotenv'
  Dotenv.load
end

require 'json'
require 'redis'
require_relative 'lib/cache'
require 'sinatra'

get '/api/nerds' do
  KnowAnNerd::Cache.fetch
end

get '*' do
  send_file File.expand_path('index.html', settings.public_folder)
end
