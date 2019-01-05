Pod::Spec.new do |s|
  s.name             = 'CetusDesignToken'
  s.version          = '0.1.0'
  s.summary          = 'Mira default tokens'
  s.description      = <<-DESC
Cetus StyleDictionary with Mira's default tokens.
                       DESC
  s.homepage         = 'homepage'
  s.license          = { :type => 'Apache-2.0', :file => 'LICENSE' }
  s.author           = { 'Ramon Honorio' => 'ramon.honorio@miraeducacao.com.br' }
  s.source           = { :git => '', :tag => s.version.to_s }
  s.platform = :ios
  s.source_files = 'build/ios/**/*.{h,m}'
  s.public_header_files = 'build/ios/**/*.h'
  s.frameworks = 'UIKit', 'QuartzCore'
end