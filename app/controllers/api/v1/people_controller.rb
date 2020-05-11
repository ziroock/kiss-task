module Api
    module V1
        class PeopleController < ApplicationController
            protect_from_forgery with: :null_session
            def index
                people = Person.all

                render json: PersonSerializer.new(people).serialized_json
            end

            def show
                person = Person.find_by(birthday: params[:birthday])
                render json: PersonSerializer.new(person).serialized_json
            end

            def create
                person = Person.new(person_info)

                if person.save
                    render json: PersonSerializer.new(person).serialized_json
                else
                    render json: {error: person.errors.messages}, status: 422
                end
            end

            def update
                person = Person.find_by(birthday: params[:birthday])

                if person.update(person_info)
                    render json: PersonSerializer.new(person).serialized_json
                else
                    render json: {error: person.errors.messages}, status: 422
                end
            end

           def destroy
                person = Person.find_by(birthday: params[:birthday])

                if person.destroy
                    head :no_content
                else
                    render json: {error: person.errors.messages}, status: 422
                end
           end

            private

            def person_info
                params.require(:person).permit(:name, :address, :city, :region, :country, :birthday)
            end
        end
    end
end