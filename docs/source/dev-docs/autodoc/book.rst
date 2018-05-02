####
book
####

.. raw:: html

   <dl class="class">
   <dt id="api.book.Book">
   <em class="property">class </em><code class="descclassname">api.book.</code><code class="descname">Book</code><a class="headerlink" href="#api.book.Book" title="Permalink to this definition">¶</a></dt>
   <dd><p>Bases: <code class="xref py py-class docutils literal notranslate"><span class="pre">flask_restful.Resource</span></code></p>
   <p>The Book object handles API requests such as Get/Post/Delete.</p>
   <dl class="attribute">
   <dt>
   <code class="descname">none.</code></dt>
   <dd></dd></dl>

   <dl class="classmethod">
   <dt id="api.book.Book.as_view">
   <em class="property">classmethod </em><code class="descname">as_view</code><span class="sig-paren">(</span><em>name</em>, <em>*class_args</em>, <em>**class_kwargs</em><span class="sig-paren">)</span><a class="headerlink" href="#api.book.Book.as_view" title="Permalink to this definition">¶</a></dt>
   <dd><p>Converts the class into an actual view function that can be used
   with the routing system.  Internally this generates a function on the
   fly which will instantiate the <code class="xref py py-class docutils literal notranslate"><span class="pre">View</span></code> on each request and call
   the <a class="reference internal" href="#api.book.Book.dispatch_request" title="api.book.Book.dispatch_request"><code class="xref py py-meth docutils literal notranslate"><span class="pre">dispatch_request()</span></code></a> method on it.</p>
   <p>The arguments passed to <a class="reference internal" href="#api.book.Book.as_view" title="api.book.Book.as_view"><code class="xref py py-meth docutils literal notranslate"><span class="pre">as_view()</span></code></a> are forwarded to the
   constructor of the class.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.book.Book.decorators">
   <code class="descname">decorators</code><em class="property"> = ()</em><a class="headerlink" href="#api.book.Book.decorators" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="method">
   <dt id="api.book.Book.delete">
   <code class="descname">delete</code><span class="sig-paren">(</span><em>isbns</em><span class="sig-paren">)</span><a class="headerlink" href="#api.book.Book.delete" title="Permalink to this definition">¶</a></dt>
   <dd><p>Deletes a book from the database.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>isbns</strong> (<em>str</em>) – The isbn of the book being deleted.</td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">What happened with the delete call.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">message</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="method">
   <dt id="api.book.Book.dispatch_request">
   <code class="descname">dispatch_request</code><span class="sig-paren">(</span><em>*args</em>, <em>**kwargs</em><span class="sig-paren">)</span><a class="headerlink" href="#api.book.Book.dispatch_request" title="Permalink to this definition">¶</a></dt>
   <dd><p>Subclasses have to override this method to implement the
   actual view function code.  This method is called with all
   the arguments from the URL rule.</p>
   </dd></dl>

   <dl class="method">
   <dt id="api.book.Book.get">
   <code class="descname">get</code><span class="sig-paren">(</span><em>isbns</em><span class="sig-paren">)</span><a class="headerlink" href="#api.book.Book.get" title="Permalink to this definition">¶</a></dt>
   <dd><p>Get request, looking for all books based on isbns.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>isbns</strong> (<em>str</em><em>[</em><em>]</em>) – A list of isbns to query with.</td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A list of jsonified books.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json[]</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.book.Book.method_decorators">
   <code class="descname">method_decorators</code><em class="property"> = []</em><a class="headerlink" href="#api.book.Book.method_decorators" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.book.Book.methods">
   <code class="descname">methods</code><em class="property"> = set(['POST', 'DELETE', 'GET'])</em><a class="headerlink" href="#api.book.Book.methods" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.book.Book.parser">
   <code class="descname">parser</code><em class="property"> = &lt;flask_restful.reqparse.RequestParser object&gt;</em><a class="headerlink" href="#api.book.Book.parser" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="method">
   <dt id="api.book.Book.post">
   <code class="descname">post</code><span class="sig-paren">(</span><em>isbns</em><span class="sig-paren">)</span><a class="headerlink" href="#api.book.Book.post" title="Permalink to this definition">¶</a></dt>
   <dd><p>Posts a book to the database.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>isbns</strong> (<em>str</em>) – The isbn of the book being posted.</td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">What happened with the post call.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">message</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.book.Book.provide_automatic_options">
   <code class="descname">provide_automatic_options</code><em class="property"> = None</em><a class="headerlink" href="#api.book.Book.provide_automatic_options" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.book.Book.representations">
   <code class="descname">representations</code><em class="property"> = None</em><a class="headerlink" href="#api.book.Book.representations" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   </dd></dl>

   <dl class="class">
   <dt id="api.book.BookList">
   <em class="property">class </em><code class="descclassname">api.book.</code><code class="descname">BookList</code><a class="headerlink" href="#api.book.BookList" title="Permalink to this definition">¶</a></dt>
   <dd><p>Bases: <code class="xref py py-class docutils literal notranslate"><span class="pre">flask_restful.Resource</span></code></p>
   <p>The BookList object handles the entire list of books in the database.</p>
   <dl class="attribute">
   <dt>
   <code class="descname">none.</code></dt>
   <dd></dd></dl>

   <dl class="classmethod">
   <dt id="api.book.BookList.as_view">
   <em class="property">classmethod </em><code class="descname">as_view</code><span class="sig-paren">(</span><em>name</em>, <em>*class_args</em>, <em>**class_kwargs</em><span class="sig-paren">)</span><a class="headerlink" href="#api.book.BookList.as_view" title="Permalink to this definition">¶</a></dt>
   <dd><p>Converts the class into an actual view function that can be used
   with the routing system.  Internally this generates a function on the
   fly which will instantiate the <code class="xref py py-class docutils literal notranslate"><span class="pre">View</span></code> on each request and call
   the <a class="reference internal" href="#api.book.BookList.dispatch_request" title="api.book.BookList.dispatch_request"><code class="xref py py-meth docutils literal notranslate"><span class="pre">dispatch_request()</span></code></a> method on it.</p>
   <p>The arguments passed to <a class="reference internal" href="#api.book.BookList.as_view" title="api.book.BookList.as_view"><code class="xref py py-meth docutils literal notranslate"><span class="pre">as_view()</span></code></a> are forwarded to the
   constructor of the class.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookList.decorators">
   <code class="descname">decorators</code><em class="property"> = ()</em><a class="headerlink" href="#api.book.BookList.decorators" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="method">
   <dt id="api.book.BookList.dispatch_request">
   <code class="descname">dispatch_request</code><span class="sig-paren">(</span><em>*args</em>, <em>**kwargs</em><span class="sig-paren">)</span><a class="headerlink" href="#api.book.BookList.dispatch_request" title="Permalink to this definition">¶</a></dt>
   <dd><p>Subclasses have to override this method to implement the
   actual view function code.  This method is called with all
   the arguments from the URL rule.</p>
   </dd></dl>

   <dl class="method">
   <dt id="api.book.BookList.get">
   <code class="descname">get</code><span class="sig-paren">(</span><em>search</em><span class="sig-paren">)</span><a class="headerlink" href="#api.book.BookList.get" title="Permalink to this definition">¶</a></dt>
   <dd><p>Gets a list of all books in database that match a search.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>search</strong> (<em>str</em>) – The string to search with.</td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A list of jsonified books that match the search result.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json[]</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookList.method_decorators">
   <code class="descname">method_decorators</code><em class="property"> = []</em><a class="headerlink" href="#api.book.BookList.method_decorators" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookList.methods">
   <code class="descname">methods</code><em class="property"> = set(['GET'])</em><a class="headerlink" href="#api.book.BookList.methods" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookList.provide_automatic_options">
   <code class="descname">provide_automatic_options</code><em class="property"> = None</em><a class="headerlink" href="#api.book.BookList.provide_automatic_options" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookList.representations">
   <code class="descname">representations</code><em class="property"> = None</em><a class="headerlink" href="#api.book.BookList.representations" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   </dd></dl>

   <dl class="class">
   <dt id="api.book.BookModel">
   <em class="property">class </em><code class="descclassname">api.book.</code><code class="descname">BookModel</code><span class="sig-paren">(</span><em>title</em>, <em>subtitle</em>, <em>authors</em>, <em>isbn</em>, <em>categories</em>, <em>publishedDate</em>, <em>smallThumbnail</em>, <em>thumbnail</em>, <em>previewLink</em>, <em>infoLink</em>, <em>canonicalVolumeLink</em><span class="sig-paren">)</span><a class="headerlink" href="#api.book.BookModel" title="Permalink to this definition">¶</a></dt>
   <dd><p>Bases: <code class="xref py py-class docutils literal notranslate"><span class="pre">sqlalchemy.ext.declarative.api.Model</span></code></p>
   <dl class="docutils">
   <dt>The BookModel object stores information about the book, as well as</dt>
   <dd>the listing objects that are associated with it.</dd>
   </dl>
   <dl class="attribute">
   <dt id="api.book.BookModel.title">
   <code class="descname">title</code><a class="headerlink" href="#api.book.BookModel.title" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – The title of the book.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookModel.subtitle">
   <code class="descname">subtitle</code><a class="headerlink" href="#api.book.BookModel.subtitle" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – The subtitle of the book.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookModel.authors">
   <code class="descname">authors</code><a class="headerlink" href="#api.book.BookModel.authors" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – The author/authors of the book.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookModel.isbn">
   <code class="descname">isbn</code><a class="headerlink" href="#api.book.BookModel.isbn" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>int</em> – The isbn number for the book.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookModel.categories">
   <code class="descname">categories</code><a class="headerlink" href="#api.book.BookModel.categories" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – The categorise of the book.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookModel.puhlishedDate">
   <code class="descname">puhlishedDate</code><a class="headerlink" href="#api.book.BookModel.puhlishedDate" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – The published date of the book.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookModel.smallThumbnail">
   <code class="descname">smallThumbnail</code><a class="headerlink" href="#api.book.BookModel.smallThumbnail" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – A string referencing the small thumbnail of the book.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookModel.thumbnail">
   <code class="descname">thumbnail</code><a class="headerlink" href="#api.book.BookModel.thumbnail" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – A string referencing the thumbnail of the book.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookModel.previewLink">
   <code class="descname">previewLink</code><a class="headerlink" href="#api.book.BookModel.previewLink" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – A link to preview the book.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookModel.infoLink">
   <code class="descname">infoLink</code><a class="headerlink" href="#api.book.BookModel.infoLink" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – An info link for the book.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookModel.canonicalVolumeLink">
   <code class="descname">canonicalVolumeLink</code><a class="headerlink" href="#api.book.BookModel.canonicalVolumeLink" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – A canononical volume link for the book.
   listings (Listing): The current listings of the book.</p>
   </dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">authors</code></dt>
   <dd><p>authors = relationship(
   “AuthorModel”,
   secondary=association_table1,
   back_populates=’works’)</p>
   </dd></dl>

   <dl class="method">
   <dt id="api.book.BookModel.bare_json">
   <code class="descname">bare_json</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.book.BookModel.bare_json" title="Permalink to this definition">¶</a></dt>
   <dd><p>Returns a jsonified book item, including a list of
   listing ids.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A json item representing a book.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="method">
   <dt id="api.book.BookModel.book_json_w_listings">
   <code class="descname">book_json_w_listings</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.book.BookModel.book_json_w_listings" title="Permalink to this definition">¶</a></dt>
   <dd><dl class="docutils">
   <dt>Returns a jsonified book item, including a list of</dt>
   <dd>jsonified listings.</dd>
   </dl>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A json item representing a book.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="method">
   <dt id="api.book.BookModel.book_json_wo_listings">
   <code class="descname">book_json_wo_listings</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.book.BookModel.book_json_wo_listings" title="Permalink to this definition">¶</a></dt>
   <dd><p>Returns a jsonified book item, not including listings.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A json item representing a book.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">canonicalVolumeLink</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">categories</code></dt>
   <dd></dd></dl>

   <dl class="method">
   <dt id="api.book.BookModel.delete_from_db">
   <code class="descname">delete_from_db</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.book.BookModel.delete_from_db" title="Permalink to this definition">¶</a></dt>
   <dd><p>Deletes the book from the database.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">none.</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="classmethod">
   <dt id="api.book.BookModel.find_by_isbn">
   <em class="property">classmethod </em><code class="descname">find_by_isbn</code><span class="sig-paren">(</span><em>isbn</em><span class="sig-paren">)</span><a class="headerlink" href="#api.book.BookModel.find_by_isbn" title="Permalink to this definition">¶</a></dt>
   <dd><p>Finds a book by isbn number.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>isbn</strong> (<em>str</em>) – The isbn number we are searching for.</td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">The book which matches the isbn.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body"><a class="reference internal" href="#api.book.Book" title="api.book.Book">Book</a></td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="method">
   <dt id="api.book.BookModel.get_listings">
   <code class="descname">get_listings</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.book.BookModel.get_listings" title="Permalink to this definition">¶</a></dt>
   <dd><p>Get a list of book listing jsons.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A list of jsonified listings.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json[]</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">infoLink</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">isbn</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookModel.listings">
   <code class="descname">listings</code><a class="headerlink" href="#api.book.BookModel.listings" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookModel.metadata">
   <code class="descname">metadata</code><em class="property"> = MetaData(bind=None)</em><a class="headerlink" href="#api.book.BookModel.metadata" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">previewLink</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookModel.publishedDate">
   <code class="descname">publishedDate</code><a class="headerlink" href="#api.book.BookModel.publishedDate" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.book.BookModel.query_class">
   <code class="descname">query_class</code><a class="headerlink" href="#api.book.BookModel.query_class" title="Permalink to this definition">¶</a></dt>
   <dd><p>alias of <code class="xref py py-class docutils literal notranslate"><span class="pre">flask_sqlalchemy.BaseQuery</span></code></p>
   </dd></dl>

   <dl class="method">
   <dt id="api.book.BookModel.save_to_db">
   <code class="descname">save_to_db</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.book.BookModel.save_to_db" title="Permalink to this definition">¶</a></dt>
   <dd><p>Saves the book to the database.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A json item representing the book.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">smallThumbnail</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">subtitle</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">thumbnail</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">title</code></dt>
   <dd></dd></dl>

   </dd></dl>
