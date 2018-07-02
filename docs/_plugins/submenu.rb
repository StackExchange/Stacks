require "nokogiri"

class SubMenuGenerator < Jekyll::Generator
  def generate(site)

    site.pages.each do |page|
      doc = Nokogiri::HTML(page['content'])
        page.data["subnav"] = []
        doc.css('h2').each do |heading|
          page.data["subnav"] << { "title" => heading.text, "url" => [page.url, heading['id']].join("#") }
        end
    end
  end
end
