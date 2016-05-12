class Api::V1::ApiController < ActionController::Base
  protect_from_forgery with: :null_session

  # before_action :require_token

  # private
  # def require_token
  #   token = params.try(:[], :token)
  #   api_key = ApiKey.find_by(token: token)
  #   head :unauthorized unless api_key
  # end
end
