module Api
    module V1
        class PeopleController < ApplicationController
            def index
                people = Person.all

                render json: PersonSerializer.new(people).serialized_json
            end

            def show
                person = Person.find_by(id: params[:id])
                render json: PersonSerializer.new(person).serialized_json
            end
        end
    end
end