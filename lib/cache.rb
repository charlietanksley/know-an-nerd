require 'redis'
require 'open-uri'
require_relative 'nerd_data'

class KnowAnNerd
  module Config
    def self.host
      redis_data.host
    end

    def self.port
      redis_data.port
    end

    def self.password
      redis_data.password
    end

    def self.redis_data
      URI.parse(ENV['REDIS_URL'])
    end
  end
end

class KnowAnNerd
  class Cache
    def self.fetch
      cache = new
      cache.update if cache.expired?

      cache.data
    end

    def data
      redis.get(nerd_key)
    end

    def update(data = nil)
      data ||= NerdData.all.to_json

      redis.set(nerd_key, data)
      redis.set(timestamp_key, current_time)
    end

    def expired?
      timestamp < current_time
    end

    private

    def current_time
      Date.today
    end

    def nerd_key
      'nerd-cache'
    end

    def redis
      @redis ||= Redis.new(host: KnowAnNerd::Config.host,
        port: KnowAnNerd::Config.port,
        password: KnowAnNerd::Config.password)
    end

    def timestamp
      stamp = redis.get(timestamp_key)
      stamp.nil? ? Date.today - 1 : Date.parse(stamp)
    end

    def timestamp_key
      'nerd-cache-timestamp'
    end
  end
end
