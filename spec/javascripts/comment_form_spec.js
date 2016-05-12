describe("CommentForm", function() {
  var form = $('<form id="new_comment" action="/videos/42/comments" method="post">');
  form.append('<input type="text" name="comment[title]" id="comment_title" />');
  form.append('<textarea name="comment[content]" id="comment_content"></textarea>');
  form.find("#comment_title").val("Cinematic Gold!");
  form.find("#comment_content").val("You have to see this.");

  var commentForm = newCommentForm(form);

  describe("new", function() {
    it("creates a new CommentForm object", function() {
      expect(commentForm).toBeDefined();
    });

    it("sets the element property", function() {
      expect(commentForm.element).toBeDefined();
    });
  });

  describe("title", function() {
    it("retrieves the title from the form", function() {
      expect(commentForm.title()).toBe("Cinematic Gold!");
    });
  });

  describe("content", function() {
    it("retrieves the title from the form", function() {
      expect(commentForm.content()).toBe("You have to see this.");
    });
  });

  describe("videoId", function() {
    it("retrieves the video id from the form", function() {
      expect(commentForm.videoId()).toBe("42");
    });
  });

  describe("attributes", function() {
    it("returns an object of comment attributes", function() {
      result = {
        title: "Cinematic Gold!",
        content: "You have to see this.",
        video_id: "42"
      }
      expect(commentForm.attributes()).toEqual(result);
    });
  });
});
