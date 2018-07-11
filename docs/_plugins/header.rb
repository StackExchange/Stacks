module Jekyll
  class RenderHeaderTag < Liquid::Tag

    def initialize(tag_name, params, tokens)
      super
      @params = eval( params.strip )

      @element = @params[:element] ? @params[:element] : nil
      @text = @params[:text] ? @params[:text] : nil
    end

    def render(context)
      @textDowncase = @text.downcase

      if @text.match(/\s/)
          @textNoSpace = @textDowncase.gsub! /\s/, '-'
      else
          @textNoSpace = @textDowncase
      end
      @slug = @textNoSpace

      "<div class=\"grid jc-space-between ai-end stacks-header\">
        <#{@element} class=\"grid--cell fl1 stacks-#{@element}\" id=\"#{@slug}\">
          #{@text.capitalize}
        </#{@element}>
        <a class=\"grid grid__center mbn6 s-btn s-btn__muted\" href=\"##{@slug}\">
          <svg aria-hidden=\"true\" class=\"svg-icon iconLink m0\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\"><path d=\"M2.9 9c0-1.16.94-2.1 2.1-2.1h3V5H5C2.79 5 1 6.79 1 9s1.79 4 4 4h3v-1.9H5A2.1 2.1 0 0 1 2.9 9zM13 5h-3v1.9h3a2.1 2.1 0 1 1 0 4.2h-3V13h3c2.21 0 4-1.79 4-4s-1.79-4-4-4zm-7 5h6V8H6v2z\"></path></svg>
        </a>
      </div>"
    end
  end
end

Liquid::Template.register_tag('header', Jekyll::RenderHeaderTag)
