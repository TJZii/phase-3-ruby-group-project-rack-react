class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/test/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "test response!"}.to_json ]]

    elsif req.path.match(/games/)
      if req.env["REQUEST_METHOD"] == "POST"
        input = JSON.parse(req.body.read)
        genre_id = req.path.split('/genres/').last.split('/games/').first
        genre = Genre.find_by(id: genre_id)
        game = genre.games.create(name: input["name"])
        return [200, { 'Content-Type' => 'application/json' }, [game.to_json ]]
      elsif req.env["REQUEST_METHOD"] == "PATCH"
        game_update = JSON.parse(req.body.read)
        game_id = req.path.split('/games/').last
        game = Game.find_by(id: game_id)
        game_update.map {|key, value| game[key] = value}
        game.save
        return [200, { 'Content-Type' => 'application/json' }, [ game.to_json ]]
      elsif req.env['REQUEST_METHOD'] == 'DELETE'
        game_id = req.path.split('/games/').last
        Game.destroy(game_id)
      else
        return [200, { 'Content-Type' => 'application/json' }, [ Game.all.to_json ]]
      end

    elsif req.path.match(/genres/)
      if req.env["REQUEST_METHOD"] == "POST"
        input = JSON.parse(req.body.read)
        genre = Genre.create(name: input["name"], imageSrc: input["imageSrc"])
        return [200, { 'Content-Type' => 'application/json' }, [genre.to_json ]]
      elsif req.env["REQUEST_METHOD"] == "PATCH"
        genre_update = JSON.parse(req.body.read)
        genre_id = req.path.split('/genre/').last
        genre = Genre.find_by(id: genre_id)
        genre_update.map {|key, value| genre[key] = value}
        genre.save
        return [200, { 'Content-Type' => 'application/json' }, [ game.to_json ]]
      elsif req.env['REQUEST_METHOD'] == 'DELETE'
        genre_id = req.path.split('/genre/').last
        Genre.destroy(genre_id)
      else
        if req.path.split('/genre').length == 0
          return [200, { 'Content-Type' => 'application/json' }, [ Genre.all.to_json ]]
        else 
          genre_id = req.path.split('/genre/').last 
          return [200, { 'Content-Type' => 'application/json' }, [ Genre.find_by(id: genre_id).to_json({:include => :games}) ]]
        end
      end


    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
