$(function(){
  function buildHTML(message) {
    if (message.text && message.image) {
			var html = `<div class="chat-main__messages_message">
										<div class="chat-main__messages__message__upper-info">
											<div class="chat-main__messages__message__upper-info__talker">
											${message.user_name}
											</div>
											<div class="chat-main__messages__message__upper-info__data">
											${message.created_at}
											</div>
										</div>
										<div class="chat-main__messages__message__lower-info">
											<p class="chat-main__messages__message__lower-info__text">
											${message.text}
											</p>
											<img src ="${message.image}" class="chat-main__messages__message__lower-info__image">
										</div>
									</div>`
    } else if (message.text) {
			var html = `<div class="chat-main__messages_message">
										<div class="chat-main__messages__message__upper-info">
											<div class="chat-main__messages__message__upper-info__talker">
											${message.user_name}
											</div>
											<div class="chat-main__messages__message__upper-info__data">
											${message.created_at}
											</div>
										</div>
										<div class="chat-main__messages__message__lower-info">
											<p class="chat-main__messages__message__lower-info__text">
											${message.text}
											</p>
										</div>
									</div>`
    } else if (message.image) {
			var html = `<div class="chat-main__messages_message">
										<div class="chat-main__messages__message__upper-info">
											<div class="chat-main__messages__message__upper-info__talker">
											${message.user_name}
											</div>
											<div class="chat-main__messages__message__upper-info__data">
											${message.created_at}
											</div>
										</div>
										<div class="chat-main__messages__message__lower-info">
											<img src ="${message.image}" class="chat-main__messages__message__lower-info__image">
										</div>
									</div>`
    };
    return html;
  }

  $("#new_message").on("submit", function(e){
		e.preventDefault();
		var formData = new FormData(this);
		var url = $(this).attr("action");
		$.ajax({
			url: url,
			type: "POST",
			data: formData,
			dataType: "json",
			processData: false,
			contentType: false
		})
		.done(function(data){
			var html = buildHTML(data);
			$('.chat-main__messages').append(html);
			$('.chat-main__messages').animate({ scrollTop: $('.chat-main__messages')[0].scrollHeight});
			$('form')[0].reset();
			$('.chat-main__form__form-parents__send-btn').prop('disabled', false);
		})
		.fail(function(){
			alert("メッセージ送信に失敗しました");
		});
  });
});