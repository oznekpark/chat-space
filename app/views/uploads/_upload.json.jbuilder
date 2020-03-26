json.extract! upload, :id, :image, :title, :body, :created_at, :updated_at
json.url upload_url(upload, format: :json)
