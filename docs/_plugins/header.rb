module Jekyll
  class RenderHeaderTag < Liquid::Tag
    include Jekyll::LiquidExtensions

    Variable = /\{\{\s*([\w]+\.?[\w]*)\s*\}\}/i

    def initialize(tag_name, markup, tokens)
      super
      @markup = markup.split("|")

      @element = @markup[0].strip!
      @text = @markup[1]
      @slug = @markup[2]
    end

    def interpolate(markup, context)
      markup.scan Variable do |variable|
        markup = markup.gsub(Variable, lookup_variable(context, variable.first))
      end
      markup
    end

    def render(context)
      if @text.match(Variable)
        processedText = interpolate(@text, context)
      else
        processedText = @text
      end

      processedText.strip!

      unless @slug.nil?
        textDowncase = @slug.strip.downcase
      else
        textDowncase = processedText.downcase
      end

      if processedText.match(/\s/)
          textNoSpace = textDowncase.gsub! /\s/, '-'
      else
          textNoSpace = textDowncase
      end
      slug = textNoSpace

      "<div class=\"d-flex jc-space-between ai-end pe-none stacks-header\">
        <#{@element} class=\"flex--cell fl1 stacks-#{@element}\" id=\"#{slug}\">
          <span class=\"pe-auto\">#{processedText}</span>
        </#{@element}>
        <a class=\"d-flex flex__center mbn6 s-btn s-btn__muted pe-auto\" href=\"##{slug}\">
          <svg aria-hidden=\"true\" class=\"svg-icon iconLink m0\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\"><path d=\"M7.22 11.83a6 6 0 0 0 1.62.85l.61-1.8a4.1 4.1 0 1 1 4.04-.8l1.26 1.42a6 6 0 1 0-7.53.33z\"></path><path d=\"M10.65 6.23a6 6 0 0 0-1.6-.87L8.4 7.15a4.1 4.1 0 1 1-4.05.73L3.12 6.43a6 6 0 1 0 7.53-.2z\"></path></svg>
        </a>
      </div>"
      
    end
  end
end

Liquid::Template.register_tag('header', Jekyll::RenderHeaderTag)
