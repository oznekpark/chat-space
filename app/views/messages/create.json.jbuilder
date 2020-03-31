json.user_name @message.user.name
json.created_at @message.created_at.strftime("%F %a %R")
json.text @message.text
json.image @message.image.url
