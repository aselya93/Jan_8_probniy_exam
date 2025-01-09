class CommentValidator {
    static validate(data) {
        const {content} = data;
    
        if (!content || typeof content !== "string" || content.trim() === "") {
            return {
              isValid: false,
              error: "content is required and must be a non-empty string.",
            };
          }
          return {
            isValid: true,
            error: null,
          };
    }
    
    }
    
    
    module.exports = CommentValidator