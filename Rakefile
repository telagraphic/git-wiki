search_template = "assets/tipuesearch/tipuesearch_content.js"
tipue_content = "js/tipuesearch_content.js"

desc "Replace search json index with liquid template"
task :replace do
  system "cp -r #{tipue_content} #{search_template}"
end

desc "Build site and search json index"
task :build do
  system "bundle exec jekyll build"
end

desc "Copy json index to main project to run locally"
task :copy do
  system "cp -r _site/#{search_template} #{search_template}"
end

# rake index
desc "Run the search build steps in one go"
task :index => [:replace, :build, :copy] do
end


# rake serve
desc "serve jekyll locally"
task :serve do
  system "bundle exec jekyll serve"
end
