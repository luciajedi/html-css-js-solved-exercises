def main():
  url = raw_input("URL: ")
  while(url!="e"):
    print "---------------------------- \n"
    print transform(url)
    print "\n --------------------------"
    url = raw_input("URL: ")

def transform(check):
  if( "github.com" in check):
    githubcom = check.find("github.com")
    check = check.replace("/blob/master/", "/")

    if ("github.io" in check):
      newbar = check[githubcom+12:].find("/")
      return "https://"+check[githubcom+12+newbar+1:]

    newbar = check[githubcom+12:].find("/")
    return "https://"+check[githubcom+11:githubcom+12+newbar]+".github.io"+check[githubcom+12+newbar:]

  else:
    caxo = check[-5:]
    githubio = check.find("github.io")

    if (caxo == "ub.io" or caxo == "b.io/"):
      return "https://www.github.com/"+ check[8:githubio-1] + check[githubio+9:check.rfind("/")] + "/" + check[8:githubio-1] + ".github.io"

    reponame = check[githubio+10:].find("/")
    return "https://www.github.com/"+ check[8:githubio-1] + check[githubio+9:githubio+10+reponame] + "/blob/master" + check[githubio+10+reponame:]


if __name__ == "__main__":
  main()
